import { Button, Grid, useTheme } from "@mui/material";
import { addpaymentMethodFields } from "../creatorWishList.data";
import FormProvider from "src/components/ReactHookForm/FormProvider";

// import { yupResolver } from '@hookform/resolvers/yup'
// import { useForm } from "react-hook-form";

export const AddPaymentMethodFunction=(props:any)=>{
  // const methodUpdate = useForm<any>({
  //   resolver: yupResolver(addpaymentMethodValidationSchema),

  //   defaultValues: addpaymentMethodDefaultValues
  // })
const theme =useTheme()

const {setupdatePaymentMethod,methods}=props;

const handleSave=(data:any)=>{
  console.log(data);
  setupdatePaymentMethod?.(true);
}




  return (
<>
 <FormProvider methods={methods}  >
    <Grid container spacing={2} mt={0} mb={0}>
    {addpaymentMethodFields?.map((item: any) => (
      <Grid item xs={12} md={item?.md} key={item?.id}>
        <item.component {...item?.componentProps} size={'small'} />
      </Grid>
    ))}
  </Grid>
  <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              textTransform: "none",
              background: theme.palette.primary.main,
              "&:hover": {
                background: "#D5A021",
              },
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
  </FormProvider>
  </>
  );
}
