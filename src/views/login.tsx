import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Form, Input, Button, Checkbox } from 'antd';

import styles from './login.module.scss';

type Props = RouteComponentProps<any> & {
    name: string;
    enthusiasmLevel?: number;
}
type State = {
    pageName?: string;
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={styles.login}>
                <div className={styles.loginForm}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    componentWillMount() {

    }
    onFinish(values: any){
        console.log('Success:', values);
    }
    onFinishFailed(errorInfo: any){
        console.log('Failed:', errorInfo);
    }
}
