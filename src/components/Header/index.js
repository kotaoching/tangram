import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

// import style from './style';

class Header extends Component {
  renderLoggedIn() {
    return (
      <Menu.Menu position="right">
        <Dropdown item text={this.props.account.user.username}>
          <Dropdown.Menu>
            <Dropdown.Item>我的主页</Dropdown.Item>
            <Dropdown.Item>设置</Dropdown.Item>
            <Dropdown.Item>退出</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    );
  }

  renderLoggedOut() {
    return (
      <Menu.Menu position="right">
        <Menu.Item name="signin" as={Link} to="/signin">
          登录
        </Menu.Item>
        <Menu.Item name="signup" as={Link} to="/signup">
          注册
        </Menu.Item>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div id="header">
        <Menu>
          <Container>
            <Menu.Item header>Pages</Menu.Item>
            <Menu.Item name="home" as={Link} to="/" />

            {this.props.account.loggedIn
              ? this.renderLoggedIn()
              : this.renderLoggedOut()}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Header;
