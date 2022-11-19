import { Step, Steps, useSteps } from "chakra-ui-steps";
import { VStack, Flex, Box, Button } from "@chakra-ui/react";

const Stepper = ({activeStep}) => {
    // const { nextStep, prevStep, reset, activeStep } = useSteps({
    //     initialStep: 1
    // });

    return (
        <div>
            <Steps activeStep={activeStep}>
                <Step key={1}>
                </Step>
                <Step key={2}>
                </Step>
                <Step key={3}>
                </Step>
            </Steps>
            {/* <Button
                onClick={() => {
                    nextStep(1);
                }}
            >
                Forward
            </Button>
            <Button
                onClick={() => {
                    prevStep(1);
                }}
            >
                Previous
            </Button> */}
        </div>
    );
};

export default Stepper;
