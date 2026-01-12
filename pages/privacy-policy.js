import TermsAndConditions from "@/components/TermsAndCondition";
import MetaConstant from "@/constants/MetaConstant";
import Footer from "@/layout/footer";
import Navigation from "@/layout/navigation";
import { NextSeo } from "next-seo";
import React from "react";

export default function PrivacyPolicy() {
    return (
        <div>
            <NextSeo
                title={MetaConstant?.[1]?.title}
                description={MetaConstant?.[1]?.description}
            />
            <Navigation />
            <TermsAndConditions />
            <Footer />
        </div>
    );
}