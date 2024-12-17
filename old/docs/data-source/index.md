# Where does Zephyr Health get data to estimate healthcare costs?

Thanks to [recent legislation](https://www.cms.gov/priorities/key-initiatives/healthplan-price-transparency), most group health plans and issuers of group or individual health insurance are now required to post pricing information for covered items and services. We're leveraging these machine-readable files from your insurance policy provider to extract negotiated rates between providers (diagnostic testing centers) and payers (insurance companies).

We combine these negotiated rates information with personalized deductible, co-pay, co-insurance, and plan information via your insurer so patients can see personalized pricing.

# For those in the back - how much data does this really represent?

[Estimates suggest](https://www.dolthub.com/blog/2022-09-02-a-trillion-prices/) that there are petabytes of raw data within these transparency files, with the data "dwarfing the Library of Congress, the LibGen catalog, the full uncompressed English Wikipedia, and the entire HD Netflix Catalog — combined."

![Barchart showing massive sizes for insurance MRFs](https://www.dolthub.com/blog/static/d61faaf13a3499676a6ce8a3dd01e5ea/912fc/sl-insurance.png "Now that's a lot of data")

# How is this data organized? And how is Zephyr generating insights with these files?

The Centers for Medicare and Medicaid Services has posted clear requirements for the transparency in healthcare data on their [Github](https://github.com/CMSgov/price-transparency-guide) repository. In particular, the data must be in a non-proprietary format (e.g., JSON, XML, YAML), and must be directly queryable using HTTPS connections.

Here at Zephyr, we're systematically ingesting these massive files and organizing them to enable us to extract and compare costs across insurance plans and providers. Half the battle in healthcare is ETL (extract-transform-load)!
