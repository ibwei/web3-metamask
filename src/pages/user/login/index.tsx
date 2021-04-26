import { Form, Input, Button } from 'antd';
import { connect, history, Loading, getDvaApp, useDispatch } from 'umi';
import { UserStateType } from '@/models/user';
import './login.less';

const mapStateToProps = ({
  user,
  loading,
}: {
  user: UserStateType;
  loading: Loading;
}) => {
  return {
    user,
    token: user.token,
    loading,
  };
};

export interface UserLoginPageProps {
  user: any;
  loading: Loading;
}

const UserLoginPage: React.FunctionComponent<UserLoginPageProps> = (props) => {
  const { loading } = props;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
  };

  // 登录事件
  const onFinish = async (form: any) => {
    /* console.log('utils', Web3.utils);
    console.log('17hex=', Web3.utils.toHex(17));
    console.log('17hex=', Web3.version); */
    /* new Promise((resolve, reject) => {
      dispatch({
        type: 'user/userLogin',
        payload: { data: form, resolve, reject },
      });
    }).then((res: any) => {
      if (res?.status === 200) {
        if (res.data.resultCode === 0) {
          Cookies.set('token', res.data.data.token);
          history.push('/home');
        }
      }
    }); */
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login_container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item {...tailLayout}>
          <Button
            type="default"
            htmlType="submit"
            shape="round"
            block
            size="large"
          >
            连接设备
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps)(UserLoginPage);
