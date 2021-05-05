import { useEffect, useContext } from 'react';
import { useInitMetaMask } from '../utils/useHooks/useInitMetaMask';
import { Spin, Layout, Menu, Breadcrumb, Button } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './app.layout.less';
import HeaderRight from '@/components/HeaderRight';
import { Web3Context } from '@/config/provider/Web3Provider';
import { ThemeContext } from '@/config/provider/ThemeProvider';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App: React.FunctionComponent = (props, context) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const { web3 } = useContext(Web3Context);

  console.log('isDark', isDark);

  /* 初始化连接ETH MetaMsk硬件钱包 */
  useEffect(() => {
    useInitMetaMask();
  }, []);
  return (
    <Spin spinning={false} tip="正在检查环境...">
      <Layout className="app-container">
        <Header className="app-header">
          <img
            className="logo"
            src={require('../assets/images/logo.png')}
            alt="metamask"
          />
          <div> MetaMask （ETH WALLET）</div>
          <div className="header-right">
            <HeaderRight />
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="钱包">
                <Menu.Item key="1">连接管理</Menu.Item>
                <Menu.Item key="2">账户管理</Menu.Item>
                <Menu.Item key="3">交易管理</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="交易">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="设置">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>钱包</Breadcrumb.Item>
              <Breadcrumb.Item>连接管理</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Button
                onClick={toggleTheme}
                type={isDark ? 'primary' : 'default'}
              >
                切换主题
              </Button>
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default App;
