'use client';

import React from 'react';
import { useForm, FormProvider, useFormContext, FieldValues } from 'react-hook-form';
import Col from './Col';

const UseFormContext = () => {
    const methods = useForm();

    // onSubmit: 表單提交
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
                <Child />
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

export default UseFormContext;

const Child = () => {
    const { register } = useFormContext();
    return (
        <Col>
            <input {...register('child')} placeholder="child" />
        </Col>
    );
};
