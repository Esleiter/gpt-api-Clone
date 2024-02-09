const corsMiddleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

export default corsMiddleware;
