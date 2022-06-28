Feature: Pinning
    When the user randomises the order of response options, He can pin certain responses so they stay in the same position

    Background:
        Given The user is able to login and to create a new project

    # Scenario: The user doesn't have the option to Pin responses if the auestion order is other than Randomised
    #     Given The user goes to Survey and adds a new question type that can have Randomised responses
        # |Types        |
        # |Single select|
        # |Multi select |
        # |Matrix (grid)|
        # |Ranked       |
    #     When The user orders the the responses with "Fixed order" or "Flip order" options
    #     Then The Pin response option will be disabled in each response elipse menu

    Scenario: The user is able to pin responses on Randomised order questions
        Given The user goes to Survey and adds a new question type that can have Randomised responses
        |Types        |
        |Single select|
        |Multi select |
        |Matrix (grid)|
        |Ranked       |
        # When The user is able to input a Question Title add 5 response options to each question type
        # And The user is able to randomise the response order and the first and last response from each question type
        # Then The pinned responses are found in the pinned position when the user Previews the Survey
        # And The user is able to unpin responses from each question type
        # Then The user is able to randomise the answers until the previously unpinned responses will change position

    # Scenario: The pinned responses are pinned after saving the project
    #     Given The user selects a created project with Randomised and Pinned responses
    #     When The user previews the Survey
    #     Then All the Pinned responses will be in the expected position