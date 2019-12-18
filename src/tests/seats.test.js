const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Seat = require("../models/Seat.model");
const { mockSeats } = require("./mockData/mockData");

describe("Testing for seat changes on a separate in-memory server", () => {
  let mongoServer;

  beforeAll(async () => {
    try {
      mongoServer = new MongoMemoryServer();
      const mongoUri = await mongoServer.getConnectionString();
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
    } catch (err) {
      console.error(err);
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Seat.create(mockSeats);
  });

  afterEach(async () => {
    jest.resetAllMocks();
    await Seat.deleteMany();
  });

  describe("[GET] all seats", () => {
    it("should return all the seats for that cinema hall", async () => {
      const response = await request(app).get("/seats/");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(3);
    });
  });

  describe("[POST] create a new seat", () => {
    it("Should create a new seat with all required fields", async () => {
      const newSeat = {
        seatNumber: "A1",
        status: "available",
        capacity: 1
      };
      const { body: seat } = await request(app)
        .post("/seats/new")
        .send(newSeat)
        .expect(201);

      expect(seat.seatNumber).toBe("A1");
      expect(seat.status).toBe("available");
      expect(seat.capacity).toBe(1);
    });

    it("Should not be able to create a new seat if required field is missing", async () => {
      const newSeat = {
        seatNumber: "A1"
      };
      const response = await request(app)
        .post("/bookings/new")
        .send(newSeat);

      expect(response.status).toBe(400);
    });
  });
});
