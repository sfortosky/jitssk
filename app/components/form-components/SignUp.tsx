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

    return (
        <section id="signup">
            <form className="section-content w-full max-w-2xl px-4 mx-auto flex flex-col gap-y-0">
                <h1>Sign your school up today</h1>

                <div className="flex flex-col md:flex-row gap-y-0 md:gap-x-4">
                    <Input>First Name</Input>
                    <Input>Last Name</Input>
                </div>

                <div className="flex flex-col md:flex-row gap-y-0 md:gap-x-4">
                    <Input>School Name</Input>
                    <Input>City/Town</Input>
                </div>

                <div className="flex flex-col md:flex-row gap-y-0 md:gap-x-4">
                    <Input>Email</Input>
                    <Input>Phone</Input>
                </div>

                <div className="flex flex-col md:flex-row gap-y-0 md:gap-x-4">
                    <Input>Number of Participants Expected</Input>
                    <Input>Type of Program</Input>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-y-0 md:gap-x-4">
                    <div className="w-full md:w-auto shrink-0">
                        <div className="pt-1">
                            <DatePicker
                                containerClassName="w-full"
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
                        </div>
                    </div>

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend pr-2 pb-1 text-left w-full">Additional Information</legend>
                        <textarea id="textarea" className="textarea border-base-200 w-full" rows={13} />
                    </fieldset>
                </div>

                <div className="w-full mt-4">
                    <Button type="button" className="btn-primary w-full md:w-auto" onClick={destructureDate}>
                        Sign me up!
                    </Button>
                </div>
            </form>
        </section>
    );
}