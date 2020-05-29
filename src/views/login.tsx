import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button } from 'antd';

import styles from './login.module.scss';

type Props = RouteComponentProps<any> & {
    name: string;
    enthusiasmLevel?: number;
}
type State = {
    pageName?: string
}

export default class login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={styles.login}>
                <Button type="primary" onClick={this.navigateToAdmin.bind(this, '/aaaa')}>登录</Button>
            </div>
        )
    }
    componentWillMount() {

    }

    navigateToAdmin(url: string) {
        this.props.history.push(url);
    }
}
