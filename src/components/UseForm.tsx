'use client';

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Col from './Col';

const defaultValues = {
    required: '1',
    test: '2',
    validate: '3',
};

const rules = {
    required: {
        required: { value: true, message: 'This field is required' },
    },
    test: {
        maxLength: { value: 2, message: 'Max length is 2' },
    },
    validate: {
        validate: (value: string) => value === 'Gary' || 'Value must be Gary',
    },
};

const UseForm = () => {
    const {
        register, // 註冊 input
        setValue, // 設定 input value
        getValues, // 取得 input value
        reset, // 重置 form
        handleSubmit, // 提交表單
        formState: { errors },
    } = useForm({
        mode: 'onBlur', // mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all" | undefined = "onSubmit"
        defaultValues: defaultValues,
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    const onSetValue = () => {
        setValue('required', '我是必填');
    };

    const onGetValues = () => {
        const data = getValues();

        console.log(data);
    };

    const onReset = () => {
        reset({
            required: '3',
            test: '2',
            validate: '3',
        });
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Col>
                <input {...register('required', rules.required)} />
                {errors?.required && <p>{errors?.required?.message as string}</p>}
            </Col>
            <Col>
                <input {...register('test', rules.test)} />
                {errors?.test && <p>{errors?.test?.message as string}</p>}
            </Col>
            <Col>
                <input {...register('validate', rules.validate)} />
                {errors?.validate && <p>{errors?.validate?.message as string}</p>}
            </Col>
            <button type="submit">Submit</button>
            <button type="button" onClick={onSetValue}>
                SetValue
            </button>
            <button type="button" onClick={onGetValues}>
                GetValues
            </button>
            <button type="button" onClick={onReset}>
                Reset
            </button>
        </form>
    );
};

export default UseForm;
