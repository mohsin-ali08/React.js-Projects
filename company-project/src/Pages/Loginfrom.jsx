import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup forms

  // Form submit handler for login
  const onLoginFinish = (values) => {
    console.log('Login form values: ', values);
    message.success('Login successful!');
  };

  // Form submit handler for signup
  const onSignupFinish = (values) => {
    console.log('Signup form values: ', values);
    message.success('Signup successful!');
  };

  return (
    <div className='flex justify-center items-center h-[490px] backdrop-blur-sm border-b '>
      <div className='bg-white bg-opacity-20 border-b backdrop-blur-md w-1/3 rounded border'>

    
    <div className='px-5'>
      <h2 className='text-3xl  py-5 font-semibold text-white' style={{ textAlign: 'center' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>

      {isLogin ? (
        // Login Form
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onLoginFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input className='py-2 ' prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password className='py-2 ' prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Form.Item  name="remember" valuePropName="checked" noStyle>
              <Checkbox className='text-white' >Remember me</Checkbox>
            </Form.Item>
            <a className='text-white' style={{ float: 'right' }} href="/">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button  className='py-5 font-semibold ' type="primary" htmlType="submit" block>
              Log in
            </Button>
            <p className='text-white' style={{ textAlign: 'center', marginTop: '10px',}}>
              Don't have an account?{' '}
              <a className='text-white font-semibold  py-1 hover:text-blue-600' onClick={() => setIsLogin(false)}>Sign Up</a>
            </p>
          </Form.Item>
        </Form>
      ) : (
        // Signup Form
        <Form name="signup_form" onFinish={onSignupFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input className='py-2 ' prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input className='py-2 ' prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password className='py-2 ' prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button className='py-5 font-semibold ' type="primary" htmlType="submit" block>
              Sign Up
            </Button>
            <p className='text-white' style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account?{' '}
              <a className='text-white font-semibold ' onClick={() => setIsLogin(true)}>Log in</a>
            </p>
          </Form.Item>
        </Form>
      )}
    </div>
    </div>
    </div>
  );
};

export default AuthForm;
