"use client";

type Props = {
  subtitle: string;
};

export default function SubTitle({ subtitle }: Props) {
  return <div className="mt-1 ml-1 text-base text-zinc-600">{subtitle}</div>;
}
