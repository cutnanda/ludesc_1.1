import Link from 'next/link';

// Komponen Menu Aktif
interface ActiveMenuProps {
    number: string;
    href: string;
    text: string;
}

const ActiveMenu: React.FC<ActiveMenuProps> = ({ number, href, text }) => {
    return (
        <div className="flex items-center gap-4">
            <p className="text-[13px] font-medium text-[#999999]">{number}</p>
            <Link href={href}>
                <p className="text-[16px] font-semibold">{text}</p>
            </Link>
        </div>
    );
};

export default ActiveMenu;
