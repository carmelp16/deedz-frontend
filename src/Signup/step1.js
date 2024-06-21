import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Logo } from '../common';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '10%',
};

const formStyle = {
  maxWidth: 600,
  width: '100%',
};

const formItemStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const StepOne = ({ setCurrent, formData, setFormData }) => {
  const onFinish = () => {
    setFormData({ ...formData });
  };

  return (
    <div style={containerStyle}>
      <Form
        name="basic"
        style={formStyle}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item style={formItemStyle}>
          <Logo />
        </Form.Item>
        <Form.Item
          label="What's your name?"
          name="username"
          style={formItemStyle}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            placeholder="Enter your name"
            prefix={<UserOutlined />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item style={formItemStyle}>
          <Button type="primary" htmlType="submit" onClick={() => setCurrent(1)}>
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepOne;
