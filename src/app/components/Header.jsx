import LIcon from '../assets/Frame.png'


export default function Header() {
    return (
        <header
            className="w-full h-auto mt-8 px-30 mx-auto flex items-center justify-between py-4  fixed top-[40px]  z-50 mb-4 header"
        // style={{ backgroundColor: '#EBFFEF' }}
        >
            {/* Logo */}
            <div >
                <img src="/sm-logo.svg" alt="" />
            </div>

            {/* Menu Items - All at same level */}
            <nav className="flex items-center gap-5" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div className="hover:text-blue-500 cursor-pointer text-lg font-medium font-mulish" style={{ color: '#1A1A1A' }}>About GAP Assessment</div>
                <div className="hover:text-blue-500 cursor-pointer" style={{ color: '#1A1A1A' }}>Institutes</div>
                <div className="hover:text-blue-500 cursor-pointer " style={{ color:  '#1A1A1A' }}>How it Works?</div>
                <div className="hover:text-blue-500 cursor-pointer " style={{ color:  '#1A1A1A' }}>Track Status</div>
                <div className="hover:text-black cursor-pointer">
                    <button
                        className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-green-700 border-none rounded-md focus:outline-none hover:bg-green-600 transition duration-300"
                        style={{
                            width: '173px',
                            height: '46px',
                        }}
                    >
                        {/* Icon */}
                        <span>
                            <img src="/solar_user-linear.png" alt="User Icon" className="w-5 h-5" />
                        </span>

                        {/* Text */}
                        <span className="font-medium">Register / Login</span>
                    </button>
                </div>
                <div className="text-white px-4 py-2 rounded-full  transition cursor-pointer select-none">
                    <img src='/Frame 2085.png' alt="dddddddddddddd" />
                </div>
            </nav>
        </header>
    );
}