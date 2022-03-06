import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@material-ui/core";
import "../css/SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="send-mail">
      <div className="send-mail-header">
        <h3>New Message</h3>
        <CloseIcon
          className="send-mail-close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send-mail-error">To is Required!</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", {
            required: true,
          })}
        />
        {errors.to && <p className="send-mail-error">Subject is Required!</p>}
        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="send-mail-message"
          {...register("message", {
            required: true,
          })}
        />
        {errors.to && <p className="send-mail-error">Message is Required!</p>}
        <div className="send-mail-options">
          <Button
            className="send-mail-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
