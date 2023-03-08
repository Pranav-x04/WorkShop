import React from 'react'
import { Button, Form, Input, Card, InputNumber } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import './form.css';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



function ProForm() {
    const [form] = Form.useForm() 
    const Id = Form.useWatch("id", form);
    const Name = Form.useWatch("bike_name", form);
    const Engine = Form.useWatch("engine_CC", form);
    const Speed = Form.useWatch("top_speed", form);
    const Power = Form.useWatch("power", form);
    function submit(e) {
        e.preventDefault();
        const data = {
            id: Id,
            bike_name: Name,
            engine_CC: Engine,
            top_speed: Speed,
            power:Power,
        }
        console.log(data);
        axios.post("http://localhost:8080/post",data)
    }
    return (
        <div className='col'>
                <Form class="form"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    action='POST'
                    >
                   
                <Form.Item class="id" label="ID" name="id">
                <Input
                type="number"
                style={{
                    width: 150,
                }}
                />
                </Form.Item>
                <Form.Item class="name" label="Name" name="bike_name">
                <Input
                type="text"
                style={{
                    width: 150,
                }}
                    />
                    </Form.Item>
                    <Form.Item class="engine" label="Engine_CC" name="engine_CC">
                    <Input
                    type="text"
                    style={{
                        width: 150,
                    }}
                    />
                    </Form.Item>
                    <Form.Item class="speed" label="Top_Speed" name="top_speed">
                    <Input
                    type="number"
                    style={{
                        width: 150,
                    }}
                    />
                    </Form.Item>
                    <Form.Item class="pow" label="Power" name="power">
                    <Input
                    type="text"
                    style={{
                        width: 150,
                    }}
                    />
                    </Form.Item>
                    
                    <Form.Item
                    wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        name="submit"
                    >
                        <Button type="primary" htmlType="submit" onClick={submit} style={{ backgroundColor: "rgb(156, 220, 217)", color: "Black"}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            <br />
            <br />
            <br />
            <br />


        </div>
    )
}

export default ProForm;