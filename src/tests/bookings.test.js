const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Booking = require("../models/Booking.model");
const { mockBookings } = require("./mockData");

describe("Testing for a booking made on a separate in-memory server", () => {
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
    await Booking.create(mockBookings);
  });

  afterEach(async () => {
    jest.resetAllMocks();
    await Booking.deleteMany();
  });

  describe("[GET] all bookings", () => {
    it("should return all the bookings made", async () => {
      const response = await request(app).get("/bookings/");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(1);
    });
  });
});
