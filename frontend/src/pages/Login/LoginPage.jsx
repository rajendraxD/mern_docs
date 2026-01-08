import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  Button,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import {
  Facebook,
  Google,
  Lock,
  Person,
  RemoveRedEyeSharp,
} from "@mui/icons-material";
import { useState } from "react";

const initialFormData = {
  email: "",
  password: "",
  rememberMe: false,
};
const LoginPage = () => {
  const hasToken = !!localStorage.getItem("token");
  const [errors, SetErrors] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const isFormInvalid =
    !formData.email.trim() ||
    !formData.password ||
    Object.values(errors).some((msg) => !!msg);

  const handleOnChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? e.target.checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
    const error = formValidation(name, val);
    SetErrors((prev) => {
      return {
        ...prev,
        [name]: error,
      };
    });
  };

  const formValidation = (name, val) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (name) {
      case "email":
        if (val.trim() == "") return "Email is required";
        if (val.length < 5) return "Email must be at least 5 characters";
        if (val.length > 50) return "Email must be less than 50 characters";
        if (!emailPattern.test(val)) {
          return "Please enter a valid email address";
        }
        return undefined;
      case "password":
        if (val.trim() == "") return "Password is required";
        if (val.length < 5) return "Password must be at least 5 characters";
        if (val.length > 20) return "Password must be less than 20 characters";
        return undefined;
      default:
        return undefined;
    }
  };
  const togglePassword = () => {
    const input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
  };
  const onSubmit = async () => {
    try {
      setLoading(true);
      console.log("formData", formData);
      //   const res = await userLogin(formData);
      // localStorage.setItem("token", res.token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const onClear = () => {
    setFormData(initialFormData);
    SetErrors(initialFormData);

    // reset password input
    const input = document.getElementById("password");
    input.type = "password";
    input.value = "";

    setLoading(false);
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-[calc(100vh)]" //h-screen
      >
        <Card
          className="w-90 md:w-100 rounded-2xl! md:p-1"
          variant="elevation"
        >
          <CardHeader
            className="py-1!"
            title={<span className="text-2xl font-semibold">Sign in</span>}
            subheader={
              <Typewriter
                options={{
                  // strings: ["Secure access to your dashboard", "Welcome back!"],
                  strings: !hasToken
                    ? ["Welcome back!", "Secure access to your dashboard"]
                    : ["Secure access to your dashboard"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 100,
                }}
              />
            }
          />
          <CardContent className="py-2!">
            <div className="flex flex-col gap-2">
              <div
                aria-label="text-field with checkbox"
                className="flex flex-col gap-1"
              >
                <div aria-label="text-field" className="flex flex-col gap-2.5">
                  <TextField
                    variant="outlined"
                    placeholder="xyz@gmail.com"
                    name="email"
                    error={!!errors.email}
                    helperText={errors.email}
                    value={formData.email}
                    onChange={handleOnChange}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <TextField
                    id="password"
                    variant="outlined"
                    placeholder="Password"
                    name="password"
                    error={!!errors.password}
                    helperText={errors.password}
                    value={formData.password}
                    onChange={handleOnChange}
                    type="password"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePassword}>
                              <RemoveRedEyeSharp />
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleOnChange}
                    />
                    <span>Remember me</span>
                  </div>
                  <Link href="#" underline="none">
                    {"Forgotten password?"}
                  </Link>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="contained"
                  className="w-full normal-case!"
                  size="large"
                  onClick={onSubmit}
                  loading={loading}
                  loadingIndicator="Logging in..."
                  disabled={isFormInvalid}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  className="normal-case!"
                  color="secondary"
                  size="large"
                  onClick={onClear}
                >
                  Clear
                </Button>
              </div>
              <Divider>or</Divider>
              <div className="flex gap-1 justify-center items-center">
                <IconButton
                  aria-label="login with google"
                  size="medium"
                  // disabled
                  color="inherit"
                >
                  <Google fontSize="large" />
                </IconButton>
                <IconButton
                  aria-label="login with facebook"
                  size="medium"
                  disabled
                  color="inherit"
                >
                  <Facebook fontSize="large" />
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
