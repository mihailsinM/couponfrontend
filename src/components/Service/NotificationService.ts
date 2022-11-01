import {Notyf} from "notyf";
import 'notyf/notyf.min.css';

class NotificationService {
    private notify = new Notyf({duration: 5000, position: {y: "top", x: "right"}, dismissible: true});

    public success(msg: string) {
        this.notify.success(msg);
    }

    public error(err: any) {
        const msg = this.errorHandler(err);
        this.notify.error(msg);
    }

    private errorHandler(err: any) {
        if (typeof err === "string")
            return err;

        if (typeof err.response?.data === "string")
            return err.response.data;

        if (Array.isArray(err.response?.data))
            return err.response.data[0];

        if (typeof err.message === "string")
            return err.message;

        return "Oops! Error occurred, try again...";

    }
}

const notificationService = new NotificationService();
export default notificationService;