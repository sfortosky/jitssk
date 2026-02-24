'use client';
import React, {useEffect, useRef, useState} from "react";
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
    const [vals, setVals] = useState<[DateObject]>();

    useEffect(() => {
        // @ts-expect-error this property is guaranteed to exist
        calendarRef!.current!.openCalendar();
    }, []);

    const destructureDate = () => {
        for (const val of vals || []) {
            console.log(val);
            console.log(val.year);
            console.log(val.month.name);
            console.log(val.day);
            console.log(val.hour);
            console.log(val.minute);
        }
    }

    return <section id="signup">
        <form>
            <h1>Sign your school up today</h1>
            <div className="flex">
                <Input>First Name</Input>
                <Input>Last Name</Input>
            </div>
            <div className="flex">
                <Input>School Name</Input>
                <Input>City/Town</Input>
            </div>
            <div className="flex">
                <Input>Email</Input>
                <Input>Phone</Input>
            </div>
            <div className="flex">
                <Input>Number of Participants Expected</Input>
                <Input>Type of Program</Input>
            </div>
            <div className="flex gap-98">
                <DatePicker
                    containerClassName="mt-2"
                    multiple
                    value={vals}
                    onChange={setVals}
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

                <fieldset className="fieldset">
                    <legend className="fieldset-legend pt-1">Additional Information</legend>
                    <textarea id="textarea" className="textarea border-base-200" rows={13} cols={50}/>
                </fieldset>
            </div>
            <Button type="button" className="btn-primary mt-1" onClick={destructureDate}>Sign me up!</Button>
        </form>
    </section>
}
