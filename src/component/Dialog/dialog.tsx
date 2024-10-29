import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  open,
  onClose,
  dialogTitle,
  dialogContent,
}: {
  open: boolean;
  onClose?: () => void;
  dialogTitle?: string | React.ReactNode;
  dialogContent?: string | React.ReactNode;
}) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              borderRadius: 0,
              height: "308px",
            },
          },
        }}
      >
        <div className="m-auto flex flex-col gap-2">
          <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialogContent}
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
