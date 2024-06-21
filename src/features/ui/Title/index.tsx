"use client";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <div className='mt-6 ml-1 text-3xl font-semibold text-zinc-600'>{title}</div>;
};

export default Title;
