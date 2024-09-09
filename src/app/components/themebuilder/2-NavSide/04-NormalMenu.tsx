import Link from 'next/link';

// Komponen Menu Biasa
interface NormalMenuProps {
    number: string;
    href: string;
    text: string;
}

const NormalMenu: React.FC<NormalMenuProps> = ({ number, href, text }) => {
    return (
        <div className="flex items-center gap-4">
            <p className="text-[13px] font-medium text-[#999999]">{number}</p>
            <Link href={href}>
                <p className="text-[15px] font-medium text-[#999999]">{text}</p>
            </Link>
        </div>
    );
};

export default NormalMenu;
