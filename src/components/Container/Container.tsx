import s from "./Container.module.scss";

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
