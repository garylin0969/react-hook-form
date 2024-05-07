'use client';

import React from 'react';
import { FieldValues, useForm, Controller } from 'react-hook-form';
import Col from './Col';

// defaultValues: 預設值
const defaultValues = {
    required: 'required預設值',
    max: 3,
    validate: 'validate預設值',
    watch: 'watch預設值',
    controller: 'controller預設值',
};

// rules: 規則
const rules = {
    required: {
        required: { value: true, message: 'This field is required' },
    },
    max: {
        max: { value: 5, message: 'Max is 5' },
        valueAsNumber: true,
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
        watch, // 監聽 input
        resetField, // 重置 input
        reset, // 重置 form
        handleSubmit, // 提交表單
        formState: { errors },
        control, // 控制 input
    } = useForm({
        mode: 'onBlur', // mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all" | undefined = "onSubmit"
        defaultValues: defaultValues,
    });

    // onSubmit: 表單提交
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    // onSetValue: 設定 input value
    const onSetValue = () => {
        setValue('required', '我是必填');
    };

    // onGetValues: 取得 input value
    const onGetValues = () => {
        console.log(getValues());
        console.log(getValues('required'));
    };

    // onResetField: 重置 input
    const onResetField = () => {
        resetField('required');
    };

    // onReset: 重置 form
    const onReset = () => {
        // reset();
        reset({
            required: 'reset required',
            max: 1,
            validate: 'reset validate',
            watch: 'reset watch',
            controller: 'reset controller',
        });
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Col>
                <input {...register('required', rules.required)} placeholder="required" />
                <p>{errors?.required?.message as string}</p>
            </Col>
            <Col>
                <input {...register('max', rules.max)} type="number" placeholder="max" />
                <p>{errors?.max?.message as string}</p>
            </Col>
            <Col>
                <input {...register('validate', rules.validate)} placeholder="validate" />
                <p>{errors?.validate?.message as string}</p>
            </Col>
            {watch('validate') === 'Gary' && (
                <Col>
                    <input {...register('watch')} placeholder="watch" />
                </Col>
            )}
            <Col>
                <Controller
                    name="controller"
                    control={control}
                    // rules={}
                    render={({ field }) => <input {...field} placeholder="controller" />}
                />
            </Col>
            <button type="submit">Submit</button>
            <button type="button" onClick={onSetValue}>
                SetValue
            </button>
            <button type="button" onClick={onGetValues}>
                GetValues
            </button>
            <button type="button" onClick={onResetField}>
                ResetField
            </button>
            <button type="button" onClick={onReset}>
                Reset
            </button>
        </form>
    );
};

export default UseForm;
