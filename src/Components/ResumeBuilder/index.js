import React from 'react';
import { Formik } from 'formik';
import Label from '../Common/Label';
import InputField from '../Common/InputField';
import { Container, FieldContainer, SubHeading, Submit, TimePeriodContainer } from './styledComponents';
import CustomDatePicker from '../CustomDatePicker';





function ResumeBuilder(props) {


    return (
        <Container>
            <Formik
                initialValues={{
                    personalDetails: {
                        name: '',
                        mobileNumber: '',
                        email: '',
                        dateOfBirth: new Date(),
                        gender: "",
                        location: "",
                    },
                    educationDetails: {
                        courses: [],
                        college: "",
                        year: "",
                        marks: "",
                    },

                    workExperiences:
                    {
                        company: "",
                        designation: "",
                        timePeriod:
                        {
                            joingingDate: new Date(),
                            relievingDate: new Date()
                        }

                    },

                    preferences: {
                        preferedLocation: [],
                        industry: "",
                        salaryRange: ""
                    }
                }}
                onSubmit={(values, actions) => {
                    props.onSubmit(values)
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <SubHeading>personal Details</SubHeading>
                        <FieldContainer>
                            <Label name="name" title="Name:" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="name"
                                name="personalDetails.name"
                                value={props.values.personalDetails.name}
                                placeholder="enter name"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="email" title="Email:" />
                            <InputField
                                type="email"
                                onChange={props.handleChange}
                                id="email"
                                name="personalDetails.email"
                                value={props.values.personalDetails.email}
                                placeholder="enter email"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="mobileNumber" title=" Mobie number:" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="mobileNumber"
                                name="personalDetails.mobileNumber"
                                value={props.values.personalDetails.mobileNumber}
                                placeholder="enter mobile Number"

                            />

                        </FieldContainer>
                        <FieldContainer>
                            <Label name="dateOfBirth" title="Date Of Birth:" />
                            <CustomDatePicker onChange={props.handleChange} name="personalDetails.dateOfBirth" value={props.values.personalDetails.dateOfBirth} />
                        </FieldContainer>
                        <SubHeading>educational Details</SubHeading>
                        <FieldContainer>
                            <Label name="course" title="course" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="course"
                                name="educationDetails.courses"
                                value={props.values.educationDetails.courses}
                                placeholder="please enter courses"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="college" title="college" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="college"
                                name="educationDetails.college"
                                value={props.values.educationDetails.college}
                                placeholder="please enter college"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="year" title="please enter year" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="year"
                                name="educationDetails.year"
                                value={props.values.educationDetails.year}
                                placeholder="please enter year"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="marks" title="please enter marks" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="marks"
                                name="educationDetails.marks"
                                value={props.values.educationDetails.marks}
                                placeholder="please enter marks"

                            />
                        </FieldContainer>

                        <SubHeading> Experience:</SubHeading>

                        <FieldContainer>
                            <Label name="company" title="please enter company" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="company"
                                name="workExperiences.company"
                                value={props.values.workExperiences.company}
                                placeholder="please enter company"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="designation" title="please enter designation" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="designation"
                                name="workExperiences.designation"
                                value={props.values.workExperiences.designation}
                                placeholder="please enter designation"

                            />
                        </FieldContainer>
                        <TimePeriodContainer>
                            <FieldContainer>
                                <Label name="from" title=" joing Date" />

                                <CustomDatePicker
                                    name="workExperiences.timePeriod.joingingDate"
                                    value={props.values.workExperiences.timePeriod.joingingDate}
                                    onChange={props.handleChange} />
                            </FieldContainer>

                            <FieldContainer>
                                <Label name="to" title="relieving Date" />
                                <CustomDatePicker
                                    name="workExperiences.timePeriod.relievingDate"
                                    value={props.values.workExperiences.timePeriod.relievingDate}
                                    onChange={props.handleChange} />
                            </FieldContainer>

                        </TimePeriodContainer>


                        <SubHeading>perences:</SubHeading><FieldContainer>
                            <Label name="preferedlocation" title="please enter time Preferred Location" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="preferences"
                                name="preferences.preferedlocation"
                                value={props.values.preferences.preferedlocation}
                                placeholder="please enter preferedlocation"

                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label name="industry" title="please enter industry" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="industry"
                                name="preferences.industry"
                                value={props.values.preferences.industry}
                                placeholder="please enter time Period"

                            />
                        </FieldContainer>

                        < FieldContainer>
                            <Label name="salaryRange" title="please enter salaryRange" />
                            <InputField
                                type="text"
                                onChange={props.handleChange}
                                id="salaryRange"
                                name="preferences.salaryRange"
                                value={props.values.preferences.salaryRange}
                                placeholder="please enter salary Range"

                            />
                        </FieldContainer>
                        <Submit type="submit">Submit</Submit>

                    </form>
                )}
            </Formik >
        </Container >)

}


export default ResumeBuilder;
