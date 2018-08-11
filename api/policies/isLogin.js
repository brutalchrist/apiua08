module.exports = async function (req, res, proceed) {
  console.log('is login?');
  if (!req.headers.authtoken) {
    return res.forbidden();
  }

  const login = await Login.find({authtoken: req.headers.authtoken});

  if (login.length <= 0) {
    return res.forbidden();
  }

  return proceed();
}