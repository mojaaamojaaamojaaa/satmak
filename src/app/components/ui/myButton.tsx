//アレンジしやすい空のボタン。トグルなど簡単なボタンに使うかも。
type MyButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function MyButton({
  className,
  children,
  onClick,
}: MyButtonProps) {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
}
