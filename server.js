import express from "express";
import axios from "axios";
import cors from "cors";
import crypto from "crypto";

const app = express();
app.use(cors());

app.get("/gravatar/:email", async (req, res) => {
  try {
    const emailHash = crypto
      .createHash("md5")
      .update(req.params.email.trim().toLowerCase())
      .digest("hex");
    const gravatarUrl = `https://www.gravatar.com/${emailHash}.json`;

    const response = await axios.get(gravatarUrl);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: "Gravatar profile not found" ,error});
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));