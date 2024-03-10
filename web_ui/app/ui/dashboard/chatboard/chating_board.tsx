import { Button } from "../../button";
import { Reply, Send } from "./chat";


export default function ChatingBoard() {
  return (
    <div className="container flex flex-col w-full h-full justify-between">
      <div className="row pb-10 flex-col">
        <Send>hi</Send>
        <Reply>Hello</Reply>
      </div>
      <div className="row">
        <form className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea className="form-control" aria-label="With textarea"></textarea>
          <Button type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
