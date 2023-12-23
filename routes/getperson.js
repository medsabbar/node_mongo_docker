import { Router } from "express";
import soap from "soap";
const url = "http://http://10.10.100.205:8080/WSOperateur/Server?xsd=1";
const args = {
  arg0: "1523997459",
  arg1: "32716978",
  arg2: "T@@z!23Key$",
};

const router = Router();

const getpersonHandler = (req, res) => {
  const api_key = req.headers["x-api-key"];
  if (!api_key) return res.status(401).send({ message: "Unauthorized" });
  if (api_key !== process.env.API_KEY)
    return res.status(401).send({ message: "Unauthorized" });
  soap.createClient(url, (err, client) => {
    if (err) console.error(err);
    client.getPersonneToPhoneOperator(args, (err, result) => {
      if (err) console.error(err);
      console.log(result);
      res.send(result);
    });
  });
};

router.get("/", getpersonHandler);

export default router;
