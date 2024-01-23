import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


const BookingCard = () => {
    return (
        <div className="relative w-full max-w-[38rem] shadow-lg group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative w-full max-w-[40rem] shadow-lg">
                <CardHeader floated={false} color="blue-gray">
                    <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                    />
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-3">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            Wooden House, Florida
                        </Typography>
                    </div>
                    <Typography color="gray">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls, and open meadows.
                    </Typography>
                    <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                        <span className="bg-blue-200 text-blue-900 text-xs font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">React</span>
                        <span className="bg-purple-100 text-purple-900 text-xs font-bold me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Redux</span>
                        <span className="bg-red-100 text-red-900 text-xs font-bold me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">RoR</span>
                        <span className="bg-cyan-200 text-cyan-900 text-xs font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
                        <span className='flex px-2 py-1 text-xs text-center text-white bg-black rounded-full gap-x-2'>React</span>
                    </div>
                </CardBody>
                <CardFooter className="flex gap-2 px-4 pt-3">
                    <Button
                        size="lg"
                        variant="gradient"
                        color="light-blue"
                        className="group relative flex items-center gap-3 overflow-hidden pr-[72px] h-[45px]"
                    >
                        Live version
                        <span className="absolute right-0 grid w-12 h-full transition-colors place-items-center bg-light-blue-600 group-hover:bg-light-blue-700">
                            <FontAwesomeIcon className="w-7 h-7" icon="fa-solid fa-up-right-from-square" />
                        </span>
                    </Button>
                    <Button
                        size="lg"
                        variant="gradient"
                        color="light-blue"
                        className="group relative flex items-center gap-3 overflow-hidden pr-[72px] h-[45px]"
                    >
                        Source code
                        <span className="absolute right-0 grid w-12 h-full transition-colors place-items-center bg-light-blue-600 group-hover:bg-light-blue-700">
                            <FontAwesomeIcon className="w-8 h-8" icon="fa-brands fa-square-github" />
                        </span>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default BookingCard;
