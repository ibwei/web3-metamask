import { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { Web3StateType } from '../models/web3';
import { useInitMetaMask } from '../utils/useHooks/useInitMetaMask';
import { Spin, Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './app.layout.less';
import HeaderRight from '@/components/HeaderRight';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function AppLayout(props: any) {
  const { web3 }: { web3: Web3StateType } = props;

  console.log(props);

  /* 初始化连接ETH MetaMsk硬件钱包 */
  useEffect(() => {
    useInitMetaMask();
  }, []);
  return (
    <Spin spinning={!web3.installMetaMask} tip="正在检查环境...">
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
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
}

const mapState2Props = ({ web3 }: { web3: Web3StateType }) => {
  return { web3: web3 };
};

export default connect(mapState2Props)(AppLayout);
