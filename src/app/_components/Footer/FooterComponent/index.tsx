"use client"
import React from 'react'
import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Gutter } from '../../Gutter';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Footer } from '../../../../payload/payload-types';
import Link from 'next/link';
import { Button } from '../../Button';

const FooterComponent = ({ footer }: { footer: Footer })  => {
    const pathname = usePathname();

    const navItems = footer?.navItems || [];
    
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
            <Gutter>
                <div className={classes.wrap}>
            <Link href="/">
                <Image src="/logo-white.svg" alt='logo' width={170} height={50}/>
            </Link>
            <p>{footer.copyright}</p>
            <div className={classes.socialLinks}>
                {navItems.map(item=>{
                    const icon = " ";
                    return (
                        <Button
                        key={item.link.label}
                        el='link'
                        href={item.link.url}
                        newTab={true}
                        className={classes.socialLinkItem}
                        >
                            {item.link.label}
                        </Button>
                    )
                })}
            </div>
                </div>
            </Gutter>
        </div>

    </footer>
  )
}

export default FooterComponent
