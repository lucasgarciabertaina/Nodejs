const { Router } = require("express");
const router = Router();

// PostgreSQL query
const pool = require("../databases/db");

// Response request
const { success, error } = require("../network/response");

const {
  postActivity,
  getActivities,
  getActivity,
  putActivity,
  deleteActivity,
} = require("../controllers/activities/activities.index");

// Activities Routes

router.post("/activity", async (req, res) => {
  await postActivity(req, res)
    .then((activityData) => {
      success(req, res, activityData, 200, 'POST');
    })
    .catch((activityError) => {
      error(req, res, activityError, 400, "There isnt any data");
    });
});

router.get("/activities", async (req, res) => {
  await getActivities(req, res)
    .then((activityData) => {
      success(req, res, activityData, 200, 'GET');
    })
    .catch((activityError) => {
      error(req, res, activityError, 400, "There isnt any data");
    });
});

router.get("/activities/:id", async (req, res) => {
  await getActivity(req, res)
    .then((activityData) => {
      success(req, res, activityData, 200), 'GET';
    })
    .catch((activityError) => {
      error(req, res, activityError, 400, "There isnt any data");
    });
});

router.put("/activities/:id", async (req, res) => {
  await putActivity(req, res)
    .then((activityData) => {
      success(req, res, activityData, 200, 'PUT');
    })
    .catch((activityError) => {
      error(req, res, activityError, 400, "There isnt any data");
    });
});

router.delete("/activities/:id", (req, res) => {
  try {
    deleteActivity(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
