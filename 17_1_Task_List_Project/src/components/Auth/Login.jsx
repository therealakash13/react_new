import LoginForm from "./LoginForm";

export default function Login(props) {
  return (
    <div className="flex items-center justify-center h-full">
      <LoginForm loginHandler={props.loginHandler} />
    </div>
  );
}
