import React, { PureComponent } from "react";
import ErrorMessage from "./ErrorMessage";

class PasswordForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    };
  }

  handleOldPasswordInput = e => {
    this.setState({ oldPassword: e.target.value });
  };

  handleNewPasswordInput = e => {
    this.setState({ newPassword: e.target.value });
  };

  handleConfirmNewPasswordInput = e => {
    this.setState({ confirmNewPassword: e.target.value });
  };

  render() {
    const { oldPassword, newPassword, confirmNewPassword } = this.state;
    console.log(oldPassword);
    return (
      <div>
        <label>Old Password</label>
        <input
          type="password"
          value={oldPassword}
          name="oldPassword"
          onChange={this.handleOldPasswordInput}
          required
          maxLength="20"
        />
        <ErrorMessage field={oldPassword} />
        <p>
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            name="newPassword"
            onChange={this.handleNewPasswordInput}
            required
            maxLength="20"
          />
          <ErrorMessage field={newPassword} />
        </p>
        <p>
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmNewPassword}
            name="confirmNewPassword"
            onChange={this.handleConfirmNewPasswordInput}
            required
            maxLength="20"
          />
          <ErrorMessage field={confirmNewPassword} />
        </p>
      </div>
    );
  }
}

export default PasswordForm;
