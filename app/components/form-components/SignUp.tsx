'use client';
import React, { useEffect, useRef } from "react";
import DateObject from "react-date-object";
import DatePicker , { CalendarRef } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

import Input from "@/app/components/form-components/Input";
import Button from "@/app/components/form-components/Button";


const setCalendar = () => {
    const today = new DateObject();
    today.setHour(12);
    today.setMinute(0);
    return today;
}

export default function SignUp () {
    const calendarRef = useRef<CalendarRef>(null);

    useEffect(() => {
        // @ts-expect-error this property is guaranteed to exist
        calendarRef!.current!.openCalendar();
    }, []);

    return <section id="signup" className="min-h-fit">
        <form>
            <h1>Sign your school up today</h1>
            <div className="flex gap-2">
                <Input>First Name</Input>
                <Input>Last Name</Input>
            </div>
            <div className="flex gap-2">
                <Input>School Name</Input>
                <Input>City/Town</Input>
            </div>
            <div className="flex gap-2">
                <Input>Email</Input>
                <Input>Phone</Input>
            </div>
            <div className="flex gap-2">
                <Input>Number of Participants Expected</Input>
                <Input>Type of Program</Input>
            </div>
            <div className="min-h-85">
                <DatePicker
                    multiple
                    arrow={false}
                    fixMainPosition={true}
                    currentDate={setCalendar()}
                    format={"YYYY-MM-DD hh:mm A"}
                    ref={calendarRef}
                    render={() => null}
                    onClose={() => false}
                    plugins={[
                        <TimePicker position="bottom" key="timePicker" hideSeconds mStep={15}/>,
                        <DatePanel sort="date" key="datePanel" markFocused/>
                    ]}
                />
            </div>
            <fieldset className="flex flex-wrap w-fit pb-2">
                <label htmlFor="textarea" className="label">Additional Information</label>
                <textarea id="textarea" className="textarea border-base-200"/>
            </fieldset>
            <Button className="btn-primary">Sign me up!</Button>
        </form>
    </section>
}
