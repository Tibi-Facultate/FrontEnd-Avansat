import React from "react";
import {
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Stack,
    Text,
    Flex,
    Icon,
    Badge
} from "@chakra-ui/react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import Card from "../components/Layout/Card/Card";

// import "./Dashboard.scss";

export default function HomePage() {
    return (
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            <Card
                title="New Users"
                bg="main.500"
                color="card.50"
                filterActions={[
                    {
                        default: "2_weeks",
                        items: {
                            "1_week": "Last week",
                            "2_weeks": "Last 14 days",
                            "30_days": "30 Days"
                        }
                    }
                ]}
            >
                <Flex alignItems="center" justifyContent="space-between">
                    <Text fontSize="4em" lineHeight="4rem" fontWeight="700">
                        80
                    </Text>
                    <Stack alignItems="center">
                        <Icon as={FaChevronUp} color="gray.100" fontSize="2em" />
                        <Badge colorScheme="green">+2.5%</Badge>
                    </Stack>
                </Flex>
            </Card>
            <Card title="New Subscriptions" bg="main.500" color="card.50">
                <Flex alignItems="center" justifyContent="space-between">
                    <Text fontSize="4em" lineHeight="4rem" fontWeight="700">
                        12
                    </Text>
                    <Stack alignItems="center">
                        <Icon as={FaChevronDown} color="gray.100" fontSize="2em" />
                        <Badge colorScheme="red">-2.5%</Badge>
                    </Stack>
                </Flex>
            </Card>
            <Card
                title="Card Title"
                subtitle="Card subtitle"
                primaryAction={{
                    content: "Create report",
                    onClick: () => {
                        alert("ok");
                    }
                }}
                secondaryActions={[
                    {
                        content: "Second action",
                        onClick: () => {
                            alert("ok");
                        }
                    }
                ]}
            >
                Card Content
            </Card>
            <Card title="Your Stats">
                <StatGroup justifyContent="space-between">
                    <Stat>
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
                            9.05%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Sold</StatLabel>
                        <StatNumber>$1,500</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            29.13%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Card>
        </SimpleGrid>

    );
}
