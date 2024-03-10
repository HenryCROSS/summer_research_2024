interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

export function Send({ children, className, ...rest }: ChatProps) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export function Reply({ children, className, ...rest }: ChatProps) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">{children}</div>
        </div>
      </div>
    );
  }