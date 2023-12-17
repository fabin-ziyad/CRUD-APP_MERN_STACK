const validateRequiredFields = async (req, res, requiredFields) => {
  const missingFields = requiredFields.filter(
    (field) => req.body[field] === undefined
  );

  if (missingFields.length > 0) {
    return res.status(403).json({
      success: false,
      message: `Required fields missing: ${missingFields.join(", ")}`,
    });
  }
  return null;
};

module.exports = {
  validateRequiredFields,
};
