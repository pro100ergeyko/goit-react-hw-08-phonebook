import { useDispatch } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

import { logIn } from 'components/redux/auth/operations';
// import Textfield from 'components/UIForm/TextFild/TexFild';
// import Button from 'components/UIForm/Button/Button';
// import { Helmet } from 'react-helmet';

// const INITIAL_FORM_STATE = { email: '', password: '' };
// const FORM_VALIDATION = Yup.object().shape({
//   email: Yup.string().email('Invalid email.').required('Required'),
//   password: Yup.string().min(8).required('Required'),
// });

// const LoginForm = () => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Helmet>
//         <title>Login page</title>
//       </Helmet>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
//             Sign in
//           </Typography>

//           <Formik
//             initialValues={INITIAL_FORM_STATE}
//             validationSchema={FORM_VALIDATION}
//             onSubmit={values => {
//               dispatch(logIn(values));
//             }}
//           >
//             {({ isValid, dirty }) => (
//               <Grid container spacing={0}>
//                 <Grid item xs={12}>
//                   <Textfield
//                     name="email"
//                     label="Email Address"
//                     margin="normal"
//                     autoComplete="email"
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Textfield
//                     name="password"
//                     label="Password"
//                     margin="normal"
//                     autoComplete="current-password"
//                     type="password"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
//                   <Button disabled={!dirty || !isValid}>Sign In</Button>
//                 </Grid>

//                 <Grid container>
//                   <Grid item xs></Grid>
//                   <Grid item>
//                     <Link
//                       component={RouterLink}
//                       to="/regisration"
//                       variant="body2"
//                     >
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             )}
//           </Formik>
//         </Box>
//       </Container>
//     </>
//   );
// };

import { FormContainer, Form, Label, Input, Button } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
