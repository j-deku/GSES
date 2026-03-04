// PasswordResetPage.js
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Grid, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { StoreContext } from '../../context/StoreContext';

const Root = styled(Grid)({
  height: '100vh',
  backgroundImage: 'linear-gradient(to bottom, #3a3d41, #22252a)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FormContainer = styled("div")(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}));

const StyledForm = styled("form")({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const PasswordReset = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { url } = useContext(StoreContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      await axios.post(`${url}/api/user/password-reset`, data);
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      setSuccess(false);
    }
  };

  return (
    <Root container>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <FormContainer>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Reset Password
          </Typography>
          <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
            <StyledTextField
              label="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
            {error && (
              <Typography variant="body1" align="center" gutterBottom color="error">
                {error}
              </Typography>
            )}
            {success && (
              <Typography variant="body1" align="center" gutterBottom color="success.main">
                Password reset link sent to your email!
              </Typography>
            )}
            <StyledButton variant="contained" color="primary" type="submit">
              Send Password Reset Link
            </StyledButton>
          </StyledForm>
        </FormContainer>
      </Grid>
    </Root>
  );
};

export default PasswordReset;
