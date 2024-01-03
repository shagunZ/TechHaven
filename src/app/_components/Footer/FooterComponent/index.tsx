"use client"
import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Footer } from '../../../../payload/payload-types';
import Link from 'next/link';

const FooterComponent = ({ footer }: { footer: Footer })  => {
    const pathname = usePathname();
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
        <Gutter>
            <ul className={classes.inclusions}>
                {inclusions.map((inclusion,index)=>(
                    <li key={inclusion.title}>
                        <Image
                         src={inclusion.icon}
                         alt={inclusion.icon}
                         width={36}
                         height={36}
                         className={classes.icon}
                         />

                         <h5 className={classes.title}>{inclusion.title}</h5>
                    <p>{inclusion.description}</p>
                    </li>
                ))}
                 </ul>
        </Gutter>

        <div className={classes.footer}>
            <Link href="/">
                <Image src="logo-white.svg" alt='logo' width={170} height={50}/>
            </Link>
            <p>{footer.copyright}</p>
        </div>

    </footer>
  )
}

export default FooterComponent
