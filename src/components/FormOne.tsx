import { Box, Typography, Button, Stack, Paper, Grid, TextField } from "@mui/material";
import ErrorBox from "./ErrorBox";
const FormOne = () => {
  const validation = [
    {
      message: "Email must be valid",
      valid: false
    }
  ]
  return (
    <Box>
      <Typography
        variant="h5"
        color="secondary"
        fontWeight="bold"
        textAlign="center"
      >
        Email Address
      </Typography>
      <Stack spacing={3} p={3}>
      <TextField variant="standard" label="Email Address" error={validation[0].valid} required></TextField>
      <ErrorBox validation={validation}/>

      </Stack>

    </Box>
  );
};
export default FormOne;
