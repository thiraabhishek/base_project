import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import TodeeLogo from '../assets/MainLogo.jpg'
import React, { useEffect, useRef, useState } from 'react'
import { Affix, Button, Layout, Menu, theme } from 'antd'
import SmNavbar from './SmNavar'
import Star from '../Icons/StarIcon'
import LogOutModal from './LogoutModal'
import ExitIcon from '../Icons/ExitIcons'
import {
  PlusCircleOutlined,
  UserOutlined,
  FolderOutlined,
  ArrowLeftOutlined,
  ZhihuOutlined,
  ContainerOutlined,
} from '@ant-design/icons'
import AddTable from '../Pages/AddTable'
import TableIndex from '../Pages/TableIndex'

const { Content, Footer, Sider } = Layout
const option = ['all todees', 'emergency', 'entertainment', 'bussiness']
const items2 = [Star].map((icon, index) => {
  const key = String(index + 1)
  return {
    key: `Todees${key}`,
    icon: React.createElement(icon),
    label: `Todees`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      const options = option[j]
      return {
        key: subKey,
        label: options,
        link: `info/${option[j]}`,
      }
    }),
  }
})
const Homescreen = () => {
  const [collapsed, setCollapsed] = useState(false)

  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState('/')
  const [selectedParams, setSelectedParams] = useState('')
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const ref = useRef(null)

  // const openTopLoading = useBearStore((state) => state.openTopLoading)
  // const openGlobalLoading = useBearStore((state) => state.openGlobalLoading)
  // const callbacks = useBearStore((state) => state.callbacks)

  const [open, setOpen] = useState(false)
  const pathName = location.pathname

  useEffect(() => {
    setSelectedKeys(pathName)

    // Array.isArray(callbacks) &&
    //     callbacks.forEach((callback) => {
    //         callback()
    //     })
    // ref?.current?.continuousStart()

    // openTopLoading(ref)

    // openGlobalLoading()
  }, [location.pathname])

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOk = () => {
    navigate('/auth')

    sessionStorage.removeItem('todee_admin_access_token')
  }
  const navigate = useNavigate()

  // const handleChildId = (childId) => setSelectedParams(childId)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {windowWidth < 768 ? (
        <SmNavbar />
      ) : (
        <>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="demo-logo-vertical" />

            <div
              className="demo-logo-vertical app_logo"
              onClick={() => navigate('/')}
            >
              <img src={TodeeLogo} alt="logo_png" />
            </div>
            <Menu
              className="demo-logo-vertical"
              mode="vertical"
              theme="dark"
              onClick={(item) => {
                //item.key
                navigate(item.key)
              }}
              selectedKeys={[selectedKeys]}
              items={[
                {
                  label: 'Add Table',
                  icon: <FolderOutlined />,
                  key: '/addtable',
                },
                {
                  label: 'Languages',
                  icon: <ZhihuOutlined />,
                  key: '/info/languages',
                },
                {
                  label: 'User',
                  icon: <UserOutlined />,
                  key: '/info/users',
                },
                {
                  label: 'Contact us',
                  icon: <ContainerOutlined />,
                  key: '/info/contactus',
                },
              ]}
            ></Menu>

            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Categories1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
            >
              {items2.map((item) => (
                <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      <Link to={child.link}>{child.label}</Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ))}
            </Menu>

            <LogOutModal
              handleOk={handleOk}
              handleCancel={handleCancel}
              open={open}
              okButtonProps={{ style: { background: 'red', borderColor: 'white' } }}
            />
            <div onClick={() => setOpen(true)}>
              <Affix offsetBottom={70} className="pointer">
                <ExitIcon />
              </Affix>
            </div>
          </Sider>
        </>
      )}

      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div className="header_tab">
            <div
              style={{
                margin: '16px 0',
                cursor: 'pointer',
                display: 'flex',
              }}
              onClick={() => navigate(-1)}
            >
              <ArrowLeftOutlined />

              <p className="text-captilize home_header px-3">{selectedParams}</p>
            </div>
            <div>
              {pathName.includes('addtable') && (
                <Link to="/">
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    className="mx-2"
                  >
                    Add Table
                  </Button>
                </Link>
              )}
              {pathName.includes('tags') && (
                <Link to="/tags">
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    className="mx-2"
                  >
                    Add Tags
                  </Button>
                </Link>
              )}

              {pathName.includes('languages') && (
                <Link to="/languages">
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    className="mx-2"
                  >
                    Add Languages
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div
            style={{
              padding: '0px 12px',
              minHeight: 360,
              background: 'white',
            }}
          >
            <Routes>
              <Route path="/addtable" element={<AddTable />} />
              <Route path="/info/:id" element={<TableIndex />} />
              {/* <Route path="/info/:id" element={<InfoTableIndex onMount={handleChildId} />} />
                            <Route path="/vehicle/:id" element={<VehicleDetailIndex />} />
                            <Route path="/categories" element={<ViewCategories onMount={handleChildId} />} />
                            <Route path="/tags" element={<AddTags />} />
                            <Route path="/languages" element={<Addlanguages />} /> */}
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Todee ©2023
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Homescreen
